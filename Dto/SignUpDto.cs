using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace cookingApp.Dto
{
    public class SignUpDto
    {
        public string Name { get; set; }

        public string Login { get; set; }
        public int Password { get; set; }

        public int RepeatPassword { get; set; }
    }
}
