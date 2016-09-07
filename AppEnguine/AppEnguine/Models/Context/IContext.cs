using System.Collections.Generic;

namespace AppEnguine.Models.Context
{
    public interface IContext
    {
        bool Add(Veicle value);
        IEnumerable<Veicle> Select();
        Veicle Get(Veicle value);
        bool Remove(Veicle value);
        bool Update(Veicle value);
        bool Delete(Veicle value);
    }
}