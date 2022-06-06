use std::io;

fn main() {
    println!("your input : ");
    let mut message = String::new();
    io::stdin().read_line(&mut message)
        .expect("Failed to read line.");
    println!("The value you entered : {}", message);
}
