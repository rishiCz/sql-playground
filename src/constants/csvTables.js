import categories from "../assets/categories.csv";
import customers from "../assets/customers.csv";
import employees from "../assets/employees.csv";

const tables = {
  categories: { csv: categories, name: "Categories" },
  customers: { csv: customers, name: "Customers" },
  employees: { csv: employees, name: "Employees" },
};

export default tables;
