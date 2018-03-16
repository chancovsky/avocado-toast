# avocado-toast
Super lightweight toast notifications with zero dependencies 🥑🍞
## Getting Started

Currently, avocado-toast is distributed via npm with no dependencies.

    npm install --save avocado-toast

## Usage

Creating toasts is super simple, first you create a new instnce of the AvocadoToast class. 

```javascript
    var notifications = new AvocadoToast();
```

then create a new toast using the creat(options) method.

```javascript
    notifications.create({text: "I ❤️ avocado toast!"})
```

### Options

When creating a new toast notification you have a couple options to pass in.  More options will be coming in future updates!

- text {string} : The text that will appear within the toast. 
- delay {int} : How long the toast will last before it disappears.


## Contributing

If you feel like contributing to this project, all help will be welcome!

    git clone https://github.com/chancovsky/avocado-toast.git
    cd measuring-cup
    npm install

## Authors

* [Connor Hancovsky](http://connorhancovsky.com)

See also the list of
[contributors](https://github.com/chancovsky/avocado-toast/contributors) who
participated in this project.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file
for details.