package com.google.sps.servlets;

import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/** Handles requests sent to the /hello URL. Try running a server and navigating to /hello! */
@WebServlet("/hello")
public class HelloWorldServlet extends HttpServlet {

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    String json = "{"; 
    json += "\"favoriteBand\" : "; 
    json += "\"My favorite band is Avenged Sevenfold\""; 
    json += ", "; 
    json += "\"myHeight\" : ";
    json += "\"I am 6 feet tall\""; 
    json += ", ";
    json += "\"favoriteGame\" : "; 
    json += "\"My favorite video game series is God of War.\""; 
    json += "}";
    response.setContentType("application/json;");
    response.getWriter().println(json);
  }
}
