using Microsoft.EntityFrameworkCore;
using store_project_api.Models;
using store_project_api.Implement.Interfaces;
using store_project_api.DTOS;


namespace store_project_api.Implement.Services
{
    public class ProductServices : IProduct
    {
     
        private readonly StoreDbContext _storeDbContext;
        public ProductServices( StoreDbContext storeDbContext)
        {
           
            _storeDbContext = storeDbContext;
        }

        public async Task<List<Product?>> GetProductAsync()
        {
            return await _storeDbContext.Products.ToListAsync();
        }
    }
}
