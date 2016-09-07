using System;

namespace AppEnguine.Models
{
    public class Veicle
    {
        public Int64 Id { get; set; }
        public string Description { get; set; }
        public int Year { get; set; }
        public int Color { get; set; }
        public int TopSpeed { get; set; }
        public bool OffRoad { get; set; }
    }
}