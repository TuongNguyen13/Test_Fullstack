using store_project_api.Models;
using store_project_api.DTOS;

namespace store_project_api.Implement.Interfaces
{
    public interface IOrder
    {
        Task<List<Order?>> GetOrderAsync();
        Task<Order?> CreateOrderAsync(OrderDTO order);
    }
}
