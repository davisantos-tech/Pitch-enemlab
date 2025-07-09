namespace enemlab.Services
{
    public class ProvaStateService
    {
        public string MateriaSelecionada { get; set; } = "matematica";
        public int QuantidadeQuestoes { get; set; }
        public bool HabilitarCronometro { get; set; } = true;

        public void Reset()
        {
            MateriaSelecionada = "matematica";
            QuantidadeQuestoes = 0;
            HabilitarCronometro = true;
        }
    }
}
