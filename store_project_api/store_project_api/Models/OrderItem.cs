using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;
using Microsoft.EntityFrameworkCore;

namespace store_project_api.Models;

public partial class OrderItem
{
    [Key]
    [StringLength(20)]
    [Unicode(false)]
    public string OrderItemId { get; set; } 

    [StringLength(20)]
    [Unicode(false)]
    public string? OrderId { get; set; }

    [StringLength(20)]
    [Unicode(false)]
    public string? ProductId { get; set; }

    public int Quantity { get; set; }

    [Column(TypeName = "decimal(18, 2)")]
    public decimal UnitPrice { get; set; }

    [Column(TypeName = "decimal(29, 2)")]
    public decimal? TotalAmount { get; private set; }

    [Column(TypeName = "datetime")]
    public DateTime? CreatedAt { get; set; }

    [ForeignKey("OrderId")]
    [InverseProperty("OrderItems")]
    public virtual Order? Order { get; set; }

    [JsonIgnore]

    [ForeignKey("ProductId")]
    [InverseProperty("OrderItems")]
    public virtual Product? Product { get; set; }
}
