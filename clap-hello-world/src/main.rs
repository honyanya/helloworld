use chrono::{FixedOffset, Local, Utc};
use clap::Parser;

/// Simple program to greet a person
#[derive(Parser, Debug)]
#[clap(author, version, about, long_about = None)]
struct Args {
    /// Name of the person to greet
    #[clap(short, long)]
    name: String,

    /// Number of times to greet
    #[clap(short, long, default_value_t = 1)]
    count: u8,
}

fn main() {
    let args = Args::parse();

    for _ in 0..args.count {
        println!("Hello {}!", args.name)
    }

    show_date()
}

fn show_date() {
    let utc_datetime = Utc::now().format("%Y-%m-%d %H:%M:%S %Z").to_string();
    println!("{}", utc_datetime);

    let local_datetime = Local::now().format("%Y-%m-%d %H:%M:%S %Z").to_string();
    println!("{}", local_datetime);

    let pdt_datetime = Local::now().with_timezone(&FixedOffset::west(7 * 3600)).format("%Y-%m-%d %H:%M:%S %Z").to_string();
    println!("{}", pdt_datetime);
}
