import Minimognavbar from "../../Navbarcomponent/minimognavbar";
import Minimogslider from "../../slider/minimogslider";
import Minimogroundcategory from "../../newCategories/minimoground";
import Minimogproduct from "../../Newproductgrid/minimogproduct";
import Minimogfooter from "../../Footer/minimogfooter";
const MinimogTemplate = ({ minimog, mainmenu }) => {
  return (
    <div className="minimogTemplate font-minimog-theme-font">
      <Minimognavbar minimog={minimog} />
      <Minimogslider minimog={minimog} />
      <div className="px-[3rem]">
        <div className="category-section flex  py-[4.25rem] space-x-[5rem] overflow-hidden">
          <div className="item w-[14%]">
            {minimog.categorysection.map((item) => (
              <div>
                <h3 className="text-[42px] text-minimog-theme-title-color font-minimog-theme-font">
                  {item.title}
                </h3>
                <p className="text-[16px] text-minimog-theme-default-title-color font-minimog-theme-font">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <div className="item w-[86%]">
            <Minimogroundcategory minimog={minimog} />
          </div>
        </div>

        {/* CATEGORY SECTION END */}

        <div className="product-section space-y-4">
          <div className="heading grid place-items-center">
            <h3 className="text-minimog-theme-default-color text-[36px] font-minimog-theme-font font-[400]">
              {minimog.productsection}
            </h3>
          </div>
          <div className="py-4">
            <Minimogproduct minimog={minimog} />
          </div>
          <div className="button-section grid place-items-center">
            <button className="p-3 rounded-lg border-minimog-theme-border-color border w-[10%] text-center">
              Shop Now
            </button>
          </div>
        </div>
        {/* PRODUCT SECTION END */}
        <Minimogfooter minimog={minimog} />
      </div>
    </div>
  );
};

export default MinimogTemplate;
