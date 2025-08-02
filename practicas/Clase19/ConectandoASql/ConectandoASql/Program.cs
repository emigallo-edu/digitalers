// See https://aka.ms/new-console-template for more information
using ConectandoASql;
using Microsoft.Data.SqlClient;

Console.WriteLine("Hello, World!");

try
{
    string connectionString = "Server=emi-virtual;Database=NetWebApiDemo;Trusted_Connection=True;Encrypt=false;";

    SqlConnection connection = new SqlConnection(connectionString);
    connection.Open();
    string query = "SELECT * FROM Pedido_Original";
    SqlCommand command = new SqlCommand(query, connection);
    SqlDataReader reader = command.ExecuteReader();

    List<PedidoOriginal> pedidos = new List<PedidoOriginal>();

    while (reader.Read())
    {
        PedidoOriginal pedido = new PedidoOriginal();
        pedido.Id = reader.GetInt32(0);
        pedido.Fecha = reader.GetDateTime(1);
        pedido.ClienteNombre = reader["Cliente"].ToString();

        pedido.Cliente = new Cliente()
        {
            Nombre = reader["Cliente"].ToString(),
            Ciudad = reader["Ciudad"].ToString()
        };

        pedidos.Add(pedido);
    }
}
catch (Exception ex)
{
    throw;
}
