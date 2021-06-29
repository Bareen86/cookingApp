using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace cookingApp.Domain
{
    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public string Login { get; set; }
        public int Password { get; set; }

        public int RepeatPassword { get; set; }

    }
}
