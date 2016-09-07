using AppEnguine.Models;
using AppEnguine.Models.Context;
using System.Web.Mvc;

namespace AppEnguine.Controllers
{
    public class VeiclesController : ApiController
    {
        public ActionResult Index()
        {
            return View(Select());
        }

        public JsonResult AddVeicle(Veicle value)
        {
            return Json(Add(value));
        }

        public JsonResult DeleteVeicle(Veicle value)
        {
            return Json(Delete(value));
        }

        public JsonResult GetVeicle(Veicle value)
        {
            return Json(Get(value));
        }

        public JsonResult RemoveVeicle(Veicle value)
        {
            return Json(Remove(value));
        }

        public JsonResult UpdateVeicle(Veicle value)
        {
            return Json(Update(value));
        }
    }
}