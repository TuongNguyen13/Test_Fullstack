using store_project_api.Models;
namespace store_project_api.DTOS
{
    public class ProductDTO
    {
        public string Name { get; set; }
        public decimal Price { get; set; }
        public string? Status { get; set; }

    }
}
