using ArcadianTestTransactionApp.Models;
using ArcadianTestTransactionApp.Service;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ArcadianTestTransactionApp.Controllers
{
    [ApiController]
    [Route("api")]
    public class TransactionController : ControllerBase
    {
        private readonly ITransactionRepository transactionRepository;
        public TransactionController(ITransactionRepository transactionRepository)
        {
            this.transactionRepository = transactionRepository;
        }

        [HttpGet]
        [Route("transactions")]
        public List<Transaction> Get()
        {
            return transactionRepository.GetTransactions();
        }

        [HttpGet]
        [Route("transaction/{transactionId}")]
        public Transaction GetById([FromRoute] int transactionId)
        {
            return transactionRepository.GetTransactionById(transactionId);
        }

        [HttpPost]
        [Route("transaction/create")]
        public Transaction Create([FromBody] Transaction transaction)
        {
            return transactionRepository.CreateTransaction(transaction);
        }
    }
}
