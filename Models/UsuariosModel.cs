namespace enemlab.Models
{
	public class UsuariosModel
	{
		public int id_usuario { get; set; }

		public string primeiro_nome { get; set; }

		public string ultimo_nome { get; set; }

		public string email { get; set; }

		public DateTime data_nascimento { get; set; }

		public string senha_hash { get; set; }

		public string escolaridade { get; set; }
	}
}
