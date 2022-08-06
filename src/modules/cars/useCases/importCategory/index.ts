import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

const categoriesRepsoitoy = null;

const importCategoryUseCase = new ImportCategoryUseCase(categoriesRepsoitoy);

const importCategoryController = new ImportCategoryController(
  importCategoryUseCase
);

export { importCategoryController };
