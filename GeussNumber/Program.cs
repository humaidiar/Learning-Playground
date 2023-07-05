// See https://aka.ms/new-console-template for more information
using System;

class Program{
  static void Main(string[] args){
    GetAppInfo();
    GreetUser();
    while(true){
    // Set correct number
    //  int correctNumber = 7;

    // Create new random object
    Random random = new Random();
    int correctNumber = random.Next(1,10);

    // Init guess var
    int guess = 0;

    // Ask user for number
    Console.WriteLine("Guess a number between 1 and 10");

    //while guess is not correct
    while(guess != correctNumber){
        string? input = Console.ReadLine();
        //checking input whether number or string?
        if(!int.TryParse(input, out guess)){
          PrintColorMessage(ConsoleColor.Red, "Please enter actual number!");
          continue;
        }
        //conver string to number for input
        guess = int.Parse(input);
        

        if(guess != correctNumber){
          PrintColorMessage(ConsoleColor.Red, "Please enter actual number!");
        }

    };

    //Output Right Number
    PrintColorMessage(ConsoleColor.Green, "You are correct !");


    //Ask to play again
    Console.WriteLine("Play Again ? [Y or N]");

    //Get the answer
      string answer = Console.ReadLine().ToUpper();

      if(answer == "Y"){
        continue;
      } else if(answer == "N"){
        return;
      }else{
        return;
      }

      }
    }
    
    //Introduction Game
    static void GetAppInfo(){
      // set app vars
      string appName = "Number Guesser";
      string appVersion = "1.0.0";
      string? appAuthor = "Ado";

      // Write out app info
      Console.WriteLine("{0}: Version {1} by {2}", appName, appVersion, appAuthor);
      
      // Reset Color
      Console.ResetColor();
    }

     //Get User Name
    static void GreetUser(){
      PrintColorMessage(ConsoleColor.Yellow, "What's your name ?");
    
      //Get user input
      string? inputName = Console.ReadLine();
      Console.WriteLine("Hello {0}, let's play a game",inputName);
    }


    //Print Message and Color
    static void PrintColorMessage(ConsoleColor color, string message){
      Console.ForegroundColor = color;
      Console.WriteLine(message);
      Console.ResetColor();
    }
}
