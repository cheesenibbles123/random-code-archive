class mainClass
{

  public static void main(string[] args){
    output("This is a much nicer way to output text!);
    output("3 + 4 = " + add(3,4));
  }

  public static void output(string input){
    System.out.println(input);
  }
  
  public static int add(int num1, int num2){
    return num1 + num2;
  }
  
}
