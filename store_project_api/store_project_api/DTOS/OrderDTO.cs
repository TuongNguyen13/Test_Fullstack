using Microsoft.Identity.Client;
using store_project_api.Models;
namespace store_project_api.DTOS
{
    public class OrderDTO
    {
        public decimal TotalAmount { get; set; }
        public DateTime? OrderTime { get; set; }
        public DateTime? CreatedAt { get; set; }
        public List<OrderItemsDTO> OrderItems { get; set; } = new List<OrderItemsDTO>();
    }
}
