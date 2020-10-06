#include <iostream>

//include functions from another file
#include <cmath>
#include <string>
#include <windows.h>

#define PI 3.141592

using namespace std;

void displayContents() {
	cout << "Contents:" << endl;
	cout << "1) Hello World" << endl;
	cout << "2) Whatever the hell this is" << endl;
	cout << "3) Variable usage with string printing to console" << endl;
	cout << "4) Working with Strings" << endl;
	cout << "5) Working with Numbers" << endl;
	cout << "6) Getting user input" << endl;
	cout << "7) Simple Calculator" << endl;
	cout << "8) Mad Libs Game" << endl;
	cout << "9) Arrays & lists" << endl;
	cout << "10) SayHi" << endl;
	cout << "11) Returning data from functions" << endl;
	cout << "12) Display a Sine wave" << endl;
	cout << "13) Quit" << endl;
	cout << "" << endl;
}

void HelloWorld() {
	//Can use \n within string instead of endl
	cout << "Hello world!" << endl;
	cout << "" << endl;
}

void magicLetters() {
	//Whatever the hell this is
	cout << "  ##  ##  ######    ######  ##  ##  ####  ######  ####" << endl;
	cout << "  ##  ##    ##        ##    ##  ##  ##    ##  ##  ##" << endl;
	cout << "  ######    ##        ##    ######  ####  ######  ####" << endl;
	cout << "  ##  ##    ##        ##    ##  ##  ##    ##  ##  ##" << endl;
	cout << "  ##  ##  ######      ##    ##  ##  ####  ##   ## ####" << endl;
	cout << "" << endl;
}

void variableUsageWithStringPrintingToConsole() {
	cout << "#### Variable usage with string printing to console ####" << endl;
	string characterName = "John";
	string characterDislike = "fish";
	int characterAge;
	characterAge = 35;

	cout << "The individual is:" << endl;
	cout << "Name: " << characterName << endl;
	cout << "Age: " << characterAge << endl;
	cout << "Dislike: " << characterDislike << ", Not specified why." << endl;
	cout << "" << endl;
}

void sayHi(string name, int age) {
	cout << "Hello " << name << " you are " << age;
	cout << "" << endl;
}

void workingWithStrings(string phrase) {
	cout << "#### Working with Strings ####" << endl;
	cout << "Phrase: " << phrase << endl;
	cout << "Length of phrase: " << phrase.length() << endl;
	cout << "2nd character: " << phrase[1] << ", 3rd character: " << phrase[2] << endl;

	phrase[0] = 'B';
	cout << "Modified character: " << phrase << endl;

	int substrStart = 8;
	int substrCharacterGrabCount = 3;
	string searchFor = "Academy";
	string subPhrase = phrase.substr(substrStart, substrCharacterGrabCount);

	cout << "Characters from position " << substrStart << " to " << substrCharacterGrabCount << " : " << subPhrase << endl;
	cout << searchFor << " found at position: " << phrase.find(searchFor, 0) << endl;
	cout << "" << endl;
}

void workingWithNumbers() {
	cout << "#### Working with Numbers ####" << endl;
	cout << 40 << endl;
	cout << "5 + 7: " << 5 + 7 << endl;
	cout << "5 - 7: " << 5 - 7 << endl;
	cout << "5 / 7: " << 5 / 7 << endl;
	cout << "5 * 7: " << 5 * 7 << endl;
	cout << "10 % 3 (MOD): " << 10 % 3 << endl;
	cout << "4 + 5 * 10 / 3: " << 4 + 5 * 10 / 3 << endl;
	cout << "(4 + 5) * 10 / 3: " << (4 + 5) * 10 / 3 << endl;

	int wnum = 5;
	double dnum = 5.5;
	wnum++;
	cout << "wnum = 5, wnum++ = " << wnum << endl;
	wnum += 80;
	cout << "wnum = 6, wnum+=80 = " << wnum << endl;
	wnum -= 80;
	cout << "wnum = 86, wnum-=80 = " << wnum << endl;
	wnum /= 3;
	cout << "wnum = 6, wnum/=3 = " << wnum << endl;
	wnum -= 2;
	cout << "wnum = 2, wnum-=2 = " << wnum << endl;

	cout << "double + int = double, 5.5 + 9  = " << 5.5 + 9 << endl;
	cout << "int/int = int (DIV), 10 / 3 = " << 10 / 3 << endl;
	cout << "double/int = double, 10.0 / 3 = " << 10.0 / 3 << endl;
	cout << "int/double = double, 10 / 3.0 = " << 10 / 3.0 << endl;
	cout << "" << endl;

	cout << "--Using cmath lib--" << endl;
	cout << "" << endl;
	cout << "pow(3,3) = " << pow(3, 3) << endl;
	cout << "sqrt(36) = " << sqrt(36) << endl;
	cout << "Can use int and double" << endl;
	cout << "round(4.3) = " << round(4.3) << endl;
	cout << "round(4.6) = " << round(4.6) << endl;
	cout << "ceil(4.6) = " << ceil(4.6) << endl;
	cout << "ceil(4.3) = " << ceil(4.3) << endl;
	cout << "floor(4.6) = " << floor(4.6) << endl;
	cout << "floor(4.3) = " << floor(4.3) << endl;
	cout << "fmax( 4 , 3 ) = " << fmax(4, 3) << endl;
	cout << "fmin( 4 , 3 ) = " << fmin(4, 3) << endl;
	cout << "" << endl;
}

void gettingUserInput() {
	//Getting user input
	cout << "#### Getting user input ####" << endl;
	int userAge;
	double userAge2;
	cout << "Enter your age (int): ";
	cin >> userAge;
	cout << "You are " << userAge << " years old" << endl;

	cout << "Enter your age (double): ";
	cin >> userAge2;
	cout << "You are " << userAge2 << " years old" << endl;

	string name;
	cout << "Enter your name: ";
	getline(cin, name);
	cout << "You are " << userAge2 << " years old" << endl;
	cout << "" << endl;
}

void simpleCalculator() {
	cout << "#### Simple add calculator ####" << endl;
	double num1, num2;
	cout << "Enter first number: ";
	cin >> num1;
	cout << "" << endl;

	cout << "Enter second number: ";
	cin >> num2;
	cout << "" << endl;

	cout << num1 + num2;
	cout << "" << endl;
}

void madLibsGame() {
	cout << "#### Mad Libs Game ####" << endl;
	string blank, colour, pluralNoun, celebrity;
	getline(cin, blank);
	cout << "Enter a colour: ";
	getline(cin, colour);
	cout << "Enter a plural noun: ";
	getline(cin, pluralNoun);
	cout << "Enter a celebrity: ";
	getline(cin, celebrity);

	cout << "Roses are " << colour << endl;
	cout << pluralNoun << " are blue" << endl;
	cout << "I love " << celebrity << endl;
	cout << "" << endl;
}

void arraysAndLists() {
	int luckyNums[] = { 4, 8, 15, 16, 23, 42 };
	cout << "Full Array/list: " << luckyNums << endl;;
	cout << "Position 0: " << luckyNums[0] << endl;
	cout << "Position 1: " << luckyNums[1] << endl;;

	luckyNums[0] = 19;
	cout << "Position 0 modified to 19: " << luckyNums << endl;

	int luckyNums2[20]; //Store up to 20 elements in array
	luckyNums2[12] = luckyNums[3];
	cout << "Full Array/list v2: " << luckyNums2 << endl;;
	cout << "" << endl;
}

double cube(double num) {
	double result = pow(num, 3);
	return result;
}

void returningDataFromFuctions() {
	cout << "Please enter the number to cube: ";
	double numberToCube;
	cin >> numberToCube;
	double answer = cube(numberToCube);
	cout << answer;
	cout << "" << endl;
}

//Creating Sin Wave
void plot(double value)
{
	int spot = (value + 1.0) * 5;

	cout << "*\n";

	for (int i = 0; i < spot - 1; ++i)
	{
		cout << " ";
	}

}

void createWave() {
	for (double angle = 0.0; angle <= PI; angle += PI / 50)
	{
		double value = sin(angle);
		plot(value);
		//cout << (value) << endl;
	}
}

//Signing it to allow usage below main()
void sayHi2(string name, int age);

void selectFunctionToRun() {
	int index = 1;
	string option;
	bool notFinished = true;

	while (notFinished){
		cout << "Please enter an option (int): ";
		cin >> option;
		if(option == "1"){
			HelloWorld();
		}
		else if (option == "2") {
			magicLetters();
		}
		else if (option == "3") {
			variableUsageWithStringPrintingToConsole();
		}
		else if (option == "4") {
			workingWithStrings("Giraffe Academy");
		}
		else if (option == "5") {
			workingWithNumbers();
		}
		else if (option == "6") {
			gettingUserInput();
		}
		else if (option == "7") {
			simpleCalculator();
		}
		else if (option == "8") {
			madLibsGame();
		}
		else if (option == "9") {
			arraysAndLists();
		}
		else if (option == "10") {
			sayHi("NAME", 3);;
		}
		else if (option == "11") {
			returningDataFromFuctions();
		}
		else if (option == "12") {
			createWave();
		}
		else if (option == "13") {
			notFinished = false;
		}
		else {
			cout << "Please enter a valid option!" << endl;
		}
	}

	return;
}

void settingConosoleColour(int colourForConsole){
	HANDLE hConsole = GetStdHandle(STD_OUTPUT_HANDLE);
	SetConsoleTextAttribute(hConsole, colourForConsole);
}

int main()
{
	settingConosoleColour(10);
	displayContents();
	selectFunctionToRun();

	//Variable Examples
	char grade = 'A';
	string phrase = "Giraffe Academy";
				   //0123456789
	int age = 50;
	int age2 = -50;

	float floatVar = 2.0;
	double gpa = 2.3; //more decimal points than float

	bool isMale = true;
	bool completedUni = false;

	return 0;
}

void sayHi2(string name, int age) {
	cout << "Hello " << name << " you are " << age;
}

//alternative main function
//int main()
//{
//    std::cout << "Hello World!\n";
//}
