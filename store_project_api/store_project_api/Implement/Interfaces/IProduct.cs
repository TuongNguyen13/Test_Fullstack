using store_project_api.DTOS;
using store_project_api.Models;

namespace store_project_api.Implement.Interfaces
{
    public interface IProduct
    {
        Task<List<Product?>> GetProductAsync();

    }
}
