using Microsoft.AspNetCore.SignalR;
using store_project_api.Models;
namespace store_project_api.Implement.Services
{
    public class OrderHub : Hub
    {
        public async Task SendOrderUpdate(Order order)
        {
            await Clients.All.SendAsync("ReceiveOrderUpdate", order);
        }

        public async Task SendMessage(string user, string message)
        {
            await Clients.All.SendAsync("ReceiveMessage", user, message);
        }

        public override Task OnConnectedAsync()
        {
            Console.WriteLine($"Connection ID: {Context.ConnectionId}");
            return base.OnConnectedAsync();
        }
    }
}
