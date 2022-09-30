using ArcadianTestTransactionApp.Data;
using ArcadianTestTransactionApp.Models;

namespace ArcadianTestTransactionApp.Service
{
    public class TransactionRepository : ITransactionRepository
    {
        private readonly InMemoryContext context;
        public TransactionRepository(InMemoryContext context)
        {
            this.context = context;
        }

        public Transaction CreateTransaction(Transaction transaction)
        {
            if (transaction == null)
                return null;


            transaction.TransactionDate = DateTime.Now;
            context.Transactions.Add(transaction);
            context.SaveChanges();
            return transaction;
        }

        public Transaction GetTransactionById(int transactionId)
        {
            var transaction = context.Transactions.SingleOrDefault(x => x.TransactionId == transactionId);

            if (transaction == null)
                throw new NullReferenceException("Transaction not found");

            return transaction;
        }

        public List<Transaction> GetTransactions()
        {
            return context.Transactions.ToList();
        }

        public Transaction ModifyTransaction(Transaction transaction)
        {
            var transactionToUpdate = context.Transactions.SingleOrDefault(x => x.TransactionId == transaction.TransactionId);

            if (transactionToUpdate == null)
                throw new NullReferenceException("Transaction not found");

            transactionToUpdate.TransactionCost = transaction.TransactionCost;
            transactionToUpdate.TransactionName = transaction.TransactionName;

            context.SaveChanges();

            return transactionToUpdate;
        }
    }
}
