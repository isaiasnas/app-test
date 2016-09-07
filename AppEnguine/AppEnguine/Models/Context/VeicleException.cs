using System;

namespace AppEnguine.Models.Context
{
    public class VeicleException : Exception
    {
        public override string Message
        {
            get
            {
                return "Erro no retorno do(s) veiculo(s)";
            }
        }
        public VeicleException(Exception error) : this("Erro no retorno do(s) veiculo(s)", error) { }
        public VeicleException(string value, Exception error) : base(value, error) { }
    }
}