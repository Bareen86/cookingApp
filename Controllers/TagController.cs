using cookingApp.Domain;
using cookingApp.Infrastructure;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace cookingApp.Controllers
{
    public class TagController : Controller
    {
        ApplicationContext db;

        public TagController(ApplicationContext context)
        {
            db = context;
        }

        [HttpPost]
        public ActionResult Add(Tag tag)
        {
            db.Entry(tag).State = EntityState.Added;
            db.SaveChanges();

            return RedirectToAction("Index");
        }



    }
}
