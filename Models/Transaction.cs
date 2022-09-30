using System.Text.Json.Serialization;

namespace ArcadianTestTransactionApp.Models
{
    public class Transaction
    {
        [JsonPropertyName("transactionId")]
        public int TransactionId { get; set; }

        [JsonPropertyName("transactionName")]
        public string TransactionName { get; set; }

        [JsonPropertyName("transactionDate")]
        public DateTime TransactionDate { get; set; }

        [JsonPropertyName("transactionCost")]
        public double TransactionCost { get; set; }
    }
}
