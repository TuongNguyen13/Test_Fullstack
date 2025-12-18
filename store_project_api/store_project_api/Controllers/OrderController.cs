using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using store_project_api.DTOS;
using store_project_api.Implement.Interfaces;
using store_project_api.Implement.Services;


namespace store_project_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly IOrder _orderServices;
        private readonly IHubContext<OrderHub> _hubContext;
        public OrderController(IOrder orderServices, IHubContext<OrderHub> hubContext)
        {
            _orderServices = orderServices;
            _hubContext = hubContext;
        }
        [HttpPost("create-order")]
        public async Task<IActionResult> CreateOrderAsync(OrderDTO order)
        {
            try
            {
                var createdOrder = await _orderServices.CreateOrderAsync(order);
                if (createdOrder == null)
                {
                    return Ok(new { Statust = -1, Message = "Order creation failed" });
                }

                // Send the created order to clients
                await _hubContext.Clients.All.SendAsync("ReceiveOrderUpdate", createdOrder);

                return Ok(new { Statust = 1, Message = "Thêm đơn hàng thành công" });
            }
            catch (Exception ex)
            {
                return Ok(new { Statust = -1, Message = $"Error: {ex.Message}" });
            }
        }

        [HttpGet("get-order")]
        public async Task<IActionResult> GetOrderAsync()
        {
            try
            {
                var orders = await _orderServices.GetOrderAsync();
                if (orders == null)
                {
                    return Ok(new { Statust = -1, Message = "Không có đơn hàng" });
                }
                return Ok(new { Statust = 1, Message = orders });
            }
            catch (Exception ex)
            {
                return Ok(new { Statust = -1, Message = $"Error: {ex.Message}" });
            }
        }
    }
}
