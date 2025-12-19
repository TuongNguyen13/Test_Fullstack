using Microsoft.AspNetCore.SignalR;
using Microsoft.EntityFrameworkCore;
using store_project_api.DTOS;
using store_project_api.Implement.Interfaces;
using store_project_api.Models;

namespace store_project_api.Implement.Services
{
    public class OrderServices : IOrder
    {
        private readonly StoreDbContext _storeDbContext;

        public OrderServices(StoreDbContext storeDbContext)
        {
            _storeDbContext = storeDbContext;
         
        }

        public async Task<Order> CreateOrderAsync(OrderDTO order)
        {
            try
            {
                // Create new OrderId with slyte DH + increase number
                using var transaction = await _storeDbContext.Database.BeginTransactionAsync();
                var lastOrder = await _storeDbContext.Orders
                                              .Where(o => o.OrderId.StartsWith("DH"))
                                              .OrderByDescending(o => o.OrderId)
                                              .FirstOrDefaultAsync();
               

                string newOrderId = "DH001";
               

                if (lastOrder != null)
                {

                    int lastNumber = int.Parse(lastOrder.OrderId.Substring(2));
                    newOrderId = "DH" + (lastNumber + 1).ToString("D3");
                }
              
                var newOrder = new Order
                {
                    OrderId = newOrderId,
                    TotalAmount = order.TotalAmount,
                    OrderTime = DateTime.Now,
                    Status = "Completed",
                    CreatedAt = DateTime.Now
                };



                // Add Order to DbContext
                _storeDbContext.Orders.Add(newOrder);

                // Add OrderItems
                var newOrderItemId = "CTDH001";
                int countItem = 0;
                foreach (var item in order.OrderItems)
                {
                    var lastOrderItem = await _storeDbContext.OrderItems
                                            .Where(o => o.OrderItemId.StartsWith("CTDH"))
                                            .OrderByDescending(o => o.OrderItemId)
                                            .FirstOrDefaultAsync();
                    
                    if(countItem == 0)
                    {
                        if (lastOrderItem != null)
                        {
                            int lastNumber = int.Parse(lastOrderItem.OrderItemId.Substring(4));
                            newOrderItemId = "CTDH" + (lastNumber + 1).ToString("D3");  // Update newOrderItemId value here!
                        }
                    }    

                    var newOrderItem = new OrderItem
                    {
                        OrderItemId = newOrderItemId, // Using newOrderItemId updated above
                        OrderId = newOrderId,
                        ProductId = item.ProductId,
                        Quantity = item.Quantity,
                        UnitPrice = item.UnitPrice,
                        CreatedAt = DateTime.Now
                    };
                    _storeDbContext.OrderItems.Add(newOrderItem);
                    newOrderItemId = "CTDH" + (int.Parse(newOrderItemId.Substring(4)) + 1).ToString("D3");
                    countItem++;
                }

                // Save changes to database
                await _storeDbContext.SaveChangesAsync();
                await transaction.CommitAsync();

                return newOrder;
            }
            catch (Exception ex)
            {
                return null;
            }
        }

        public async Task<List<Order?>> GetOrderAsync()
        {
         return await _storeDbContext.Orders.ToListAsync();
        }
    }
}

