namespace enemlab.Models
{
	public class QuestoesModel
	{
		public int id_questoes { get; set; }

		public string enunciado { get; set; }

		public string alternativa_a { get; set; }

		public string alternativa_b { get; set; }

		public string alternativa_c { get; set; }

		public string alternativa_d { get; set; }

		public string alternativa_e { get; set; }

		public string resposta_correta { get; set; }

		public int ano_enem { get; set; }

		public string materia { get; set; }

		public byte[]? imagem { get; set; }
		
		public int questao_questao_ano { get; set; }	

	}
}
