using cookingApp.Domain;
using cookingApp.Infrastructure;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace cookingApp.Controllers
{
    [ApiController]
    [Route("api/recipes")]
    public class RecipesController : Controller
    {
        ApplicationContext db;

        public RecipesController(ApplicationContext context)
        {
            db = context;
        }

        [HttpGet]
        public IEnumerable<Recipe> Get()
        {
            return db.Recipes.ToList();
        }

        [HttpGet("{id}")]
        public Recipe Get(int id)
        {
            Recipe recipe = db.Recipes.FirstOrDefault(recipe => recipe.Id == id);
            return recipe;
        }

        [HttpPost]
        public IActionResult Post(Recipe recipe)
        {
            db.Recipes.Add(recipe);
            db.SaveChanges();
            return Ok(recipe);
        }

        [HttpPut]
        public IActionResult Put(Recipe recipe)
        {
            db.Update(recipe);
            db.SaveChanges();
            return Ok(recipe);
        }

    }
}
