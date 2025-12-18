namespace store_project_api.DTOS
{
    public class OrderItemsDTO
    {
        public string? ProductId { get; set; }
        public int Quantity { get; set; }
        public decimal UnitPrice { get; set; }
    }
}
