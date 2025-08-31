namespace enemlab.Models
{
	public class PerfilModel
	{
		public int id_perfil { get; set; }

		public int id_usuario { get; set; }

		public int pontuacao { get; set; }

		public int questoes_respondidas { get; set; }

		public int acertos { get; set; }

		public int erros { get; set; }

		public DateTime? data_ultimo_acesso { get; set; }	

		public TimeSpan tempo_estudo { get; set; }
	}
}
