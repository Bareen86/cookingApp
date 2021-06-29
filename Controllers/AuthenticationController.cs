using cookingApp.Domain;
using cookingApp.Infrastructure;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace cookingApp.Controllers
{
    public class AuthenticationController : Controller
    {
        ApplicationContext db;

        public AuthenticationController(ApplicationContext context)
        {
            db = context;
        }





    }
}
