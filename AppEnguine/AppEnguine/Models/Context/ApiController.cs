using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;

namespace AppEnguine.Models.Context
{
    public class ApiController : Controller, IContext
    {
        public static IList<Veicle> _veicles = null;

        public bool Add(Veicle value)
        {
            try
            {
                _veicles.Add(value);
                return true;
            }
            catch (Exception ex)
            {
                throw new VeicleException(ex) { };
            }
        }

        public bool Delete(Veicle value)
        {
            try
            {
                _veicles.Add(value);
                return true;
            }
            catch (Exception ex)
            {
                throw new VeicleException(ex) { };
            }
        }

        public Veicle Get(Veicle value)
        {
            try
            {
                var veicle = _veicles.FirstOrDefault(w => w.Id == value.Id);
                return veicle != null ? veicle : default(Veicle);
            }
            catch (Exception ex)
            {
                throw new VeicleException(ex) { };
            }
        }

        public bool Remove(Veicle value)
        {
            try
            {
                _veicles.Remove(Get(value));
                return true;
            }
            catch (Exception ex)
            {
                throw new VeicleException(ex) { };
            }
        }

        public IEnumerable<Veicle> Select()
        {
            try
            {
                return _veicles;
            }
            catch (Exception ex)
            {
                throw new VeicleException(ex) { };
            }
        }

        public bool Update(Veicle value)
        {
            try
            {
                var veicle = Get(value);
                if (veicle != null)
                {
                    veicle.Color = value.Color;
                    veicle.Description = value.Description;
                    veicle.OffRoad = value.OffRoad;
                    veicle.TopSpeed = value.TopSpeed;
                    veicle.Year = value.Year;
                }
                return true;
            }
            catch (Exception ex)
            {
                throw new VeicleException(ex) { };
            }
        }
    }
}