using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using store_project_api.Implement.Interfaces;
using store_project_api.Implement.Services;
using System.Runtime.InteropServices;

namespace store_project_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IProduct _productServices;
        public ProductController(IProduct productServices)
        {
            _productServices = productServices;
        }

        [HttpGet("get-product")]
        public async Task<IActionResult> GetProductAsync()
        {
            var product = await _productServices.GetProductAsync();
            if (product == null)
            {
                return Ok(new { Statust = -1, Message = "No products found" });
            }
            return Ok(new { Statust = 1, Message = product });
        }
    }
}
