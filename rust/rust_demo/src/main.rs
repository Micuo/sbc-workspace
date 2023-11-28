use std::io;

fn main() {
    let mut input_string = String::new();
    println!("Enter a string:");
    io::stdin().read_line(&mut input_string).expect("Failed to read line");

    find_and_print_vowels(&input_string);
}

fn find_and_print_vowels(input: &str) {
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

    for c in input.chars() {
        if vowels.contains(&c) {
            print!("{} ", c);
        }
    }

    println!();
}
