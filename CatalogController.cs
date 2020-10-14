
using Microsoft.AspNetCore.Mvc;

namespace PropertyRental.Controllers
{
    public class CatalogController : Controller
    {
        public IActionResult Index()
        {
            return View(); // catalog page
        }

        public IActionResult Register()
        {
            return View(); // register page
        }
    }
}