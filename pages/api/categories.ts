import { container } from "tsyringe";
import CategoryService from "../../src/services/CategoryService";

export default async function categories(req, res) {
  const categoryService = container.resolve(CategoryService);
  try {
    const categories = await categoryService.getAll();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json(error);
  }
}
