package co.yedam.serv;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.common.EmpDAO;
import co.yedam.common.Employee;

@WebServlet("/AddEmpServlet")
public class AddEmpServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public AddEmpServlet() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String id = request.getParameter("id");
		String name = request.getParameter("name");
		String email = request.getParameter("email");
		String hireDate = request.getParameter("hireDate");
		String job = request.getParameter("job");
		
		System.out.println("id: "+ id + ", name: "+ name + ", email: "+ email + ", hireDate: "+ hireDate + ", job: "+ job);
		
		Employee emp = new Employee();
		emp.setEmployeeId(Integer.parseInt(id));
		emp.setLastName(name);
		emp.setEmail(email);
		emp.setHireDate(hireDate);
		emp.setJobId(job);
		
		EmpDAO dao = new EmpDAO();
		PrintWriter out = response.getWriter();
		
		if (dao.insertEmp(emp)) {
			//{"id";"?", "name":"?", "email":"?", "hireDate":"?", "job":"?"}
			out.println("{\"id\":\""+ id 
					+"\", \"name\":\""+name
					+"\", \"email\":\""+email
					+"\", \"hireDate\":\""+hireDate
					+"\", \"job\":\""+ job +"\"}");
		} else {
			out.println("{\"msg\":\"실행중 에러가 발생\"");
		}
		
	}

}
