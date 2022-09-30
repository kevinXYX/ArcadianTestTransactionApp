
using ArcadianTestTransactionApp.Models;

namespace ArcadianTestTransactionApp.Service
{
    public interface ITransactionRepository
    {
        List<Transaction> GetTransactions();
        Transaction GetTransactionById(int transactionId);
        Transaction CreateTransaction(Transaction transaction);
        Transaction ModifyTransaction(Transaction transaction);
    }
}
