using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace cookingApp.Domain
{
    public class Recipe
    {
        public int Id { get; set; }
        public string ImageUrl { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int CookingTime { get; set; }
        public int PortionsCount { get; set; }
        public string Ingredients { get; set; }
        public string Steps { get; set; }
    }
}
