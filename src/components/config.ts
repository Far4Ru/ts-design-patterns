export const MENU_ITEMS = [
  {
    title: 'Порождающие паттерны',
    en_title: 'Creational Patterns',
    subitems: [
      {
        title: 'Абстрактная фабрика',
        en_title: 'Abstract Factory',
        description: 'Создает семейства связанных объектов без указания их конкретных классов.',
        code: `interface Button {
    render(): void;
}

class WinButton implements Button {
    render() { console.log("Windows button"); }
}

class MacButton implements Button {
    render() { console.log("Mac button"); }
}

interface GUIFactory {
    createButton(): Button;
}

class WinFactory implements GUIFactory {
    createButton(): Button { return new WinButton(); }
}

class MacFactory implements GUIFactory {
    createButton(): Button { return new MacButton(); }
}`,
        notes: [
          'Подходит: Когда система должна быть независимой от процесса создания объектов',
          'Не подходит: Для простых приложений с одним типом объектов',
        ],
      },
      {
        title: 'Строитель',
        en_title: 'Builder',
        description: 'Позволяет создавать сложные объекты пошагово.',
        code: `class Pizza {
    constructor(public size: number, public cheese: boolean, public pepperoni: boolean) {}
}

class PizzaBuilder {
    private size: number;
    private cheese = false;
    private pepperoni = false;

    constructor(size: number) { this.size = size; }

    addCheese(): PizzaBuilder { this.cheese = true; return this; }
    addPepperoni(): PizzaBuilder { this.pepperoni = true; return this; }

    build(): Pizza {
        return new Pizza(this.size, this.cheese, this.pepperoni);
    }
}

const pizza = new PizzaBuilder(12).addCheese().addPepperoni().build();`,
        notes: [
          'Подходит: Для создания объектов со множеством параметров',
          'Не подходит: Для простых объектов с фиксированной структурой',
        ],
      },
      {
        title: 'Фабричный метод',
        en_title: 'Factory Method',
        description:
          'Определяет интерфейс для создания объекта, но оставляет подклассам решение о том, какой класс инстанцировать.',
        code: `abstract class Creator {
    public abstract factoryMethod(): Product;

    public someOperation(): string {
        const product = this.factoryMethod();
        return \`Creator: \${product.operation()}\`;
    }
}

class ConcreteCreator1 extends Creator {
    public factoryMethod(): Product {
        return new ConcreteProduct1();
    }
}

interface Product {
    operation(): string;
}

class ConcreteProduct1 implements Product {
    public operation(): string {
        return 'Result of ConcreteProduct1';
    }
}`,
        notes: [
          'Подходит: Когда классу заранее неизвестно, объекты каких классов ему нужно создавать',
          'Не подходит: Когда создаваемые продукты просты и не требуют сложной логики создания',
        ],
      },
      {
        title: 'Прототип',
        en_title: 'Prototype',
        description: 'Позволяет копировать объекты без привязки к их конкретным классам.',
        code: `interface Prototype {
    clone(): Prototype;
}

class ConcretePrototype implements Prototype {
    public field: any;

    constructor(prototype?: ConcretePrototype) {
        if (prototype) {
            this.field = prototype.field;
        }
    }

    public clone(): Prototype {
        return new ConcretePrototype(this);
    }
}`,
        notes: [
          'Подходит: Когда нужно избежать сложной инициализации объектов',
          'Не подходит: Когда копирование объектов проще сделать вручную',
        ],
      },
      {
        title: 'Одиночка',
        en_title: 'Singleton',
        description: 'Гарантирует, что у класса есть только один экземпляр.',
        code: `class Singleton {
    private static instance: Singleton;

    private constructor() {}

    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}`,
        notes: [
          'Подходит: Для глобального доступа к ресурсам (логгеры, конфиги)',
          'Не подходит: Когда затрудняет тестирование или нарушает принцип единственной ответственности',
        ],
      },
    ],
  },
  {
    title: 'Структурные паттерны',
    en_title: 'Structural Patterns',
    subitems: [
      {
        title: 'Адаптер',
        en_title: 'Adapter',
        description: 'Позволяет работать с несовместимыми интерфейсами.',
        code: `interface LightningPhone {
    useLightning(): void;
}

class iPhone implements LightningPhone {
    useLightning() { console.log("Using lightning"); }
}

class MicroUSBPhone {
    useMicroUSB() { console.log("Using micro USB"); }
}

class LightningToMicroUSBAdapter implements LightningPhone {
    constructor(private microUSBPhone: MicroUSBPhone) {}

    useLightning() {
        console.log("Converting lightning to micro USB");
        this.microUSBPhone.useMicroUSB();
    }
}`,
        notes: [
          'Подходит: Для интеграции старого кода с новым',
          'Не подходит: Когда можно изменить исходный интерфейс',
        ],
      },
      {
        title: 'Декоратор',
        en_title: 'Decorator',
        description: 'Динамически добавляет объекту новые обязанности.',
        code: `interface Coffee {
    cost(): number;
    description(): string;
}

class SimpleCoffee implements Coffee {
    cost() { return 10; }
    description() { return "Simple coffee"; }
}

class MilkDecorator implements Coffee {
    constructor(private coffee: Coffee) {}

    cost() { return this.coffee.cost() + 2; }
    description() { return \`\${this.coffee.description()}, milk\`; }
}

let coffee: Coffee = new SimpleCoffee();
coffee = new MilkDecorator(coffee);`,
        notes: [
          'Подходит: Для добавления функциональности без изменения классов',
          'Не подходит: Когда можно использовать простые подклассы',
        ],
      },
      {
        title: 'Мост',
        en_title: 'Bridge',
        description: 'Разделяет абстракцию и реализацию, позволяя им изменяться независимо.',
        code: `interface Implementation {
    operationImplementation(): string;
}

class ConcreteImplementationA implements Implementation {
    operationImplementation(): string {
        return 'ConcreteImplementationA';
    }
}

class Abstraction {
    protected implementation: Implementation;

    constructor(implementation: Implementation) {
        this.implementation = implementation;
    }

    public operation(): string {
        return this.implementation.operationImplementation();
    }
}`,
        notes: [
          'Подходит: Для разделения монолитных классов',
          'Не подходит: Для простых классов с одной реализацией',
        ],
      },
      {
        title: 'Компоновщик',
        en_title: 'Composite',
        description:
          'Группирует объекты в древовидные структуры для работы с ними как с единым объектом.',
        code: `interface Component {
    operation(): string;
}

class Leaf implements Component {
    public operation(): string {
        return 'Leaf';
    }
}

class Composite implements Component {
    private children: Component[] = [];

    public add(component: Component): void {
        this.children.push(component);
    }

    public operation(): string {
        return \`Branch(\${this.children.map(child => child.operation()).join('+')})\`;
    }
}`,
        notes: [
          'Подходит: Для представления иерархий часть-целое',
          'Не подходит: Когда различия между компонентами слишком велики',
        ],
      },
      {
        title: 'Фасад',
        en_title: 'Facade',
        description: 'Предоставляет упрощенный интерфейс к сложной системе классов.',
        code: `class Subsystem1 {
    public operation1(): string {
        return 'Subsystem1: Ready!';
    }
}

class Facade {
    protected subsystem1: Subsystem1;

    constructor(subsystem1?: Subsystem1) {
        this.subsystem1 = subsystem1 || new Subsystem1();
    }

    public operation(): string {
        return this.subsystem1.operation1();
    }
}`,
        notes: [
          'Подходит: Для упрощения работы со сложными системами',
          'Не подходит: Когда нужен полный контроль над системой',
        ],
      },
      {
        title: 'Приспособленец',
        en_title: 'Flyweight',
        description: 'Эффективно поддерживает множество мелких объектов.',
        code: `class Flyweight {
    private sharedState: any;

    constructor(sharedState: any) {
        this.sharedState = sharedState;
    }

    public operation(uniqueState: any): void {
        console.log(\`Shared: \${JSON.stringify(this.sharedState)}, Unique: \${JSON.stringify(uniqueState)}\`);
    }
}

class FlyweightFactory {
    private flyweights: {[key: string]: Flyweight} = {};

    public getFlyweight(sharedState: any): Flyweight {
        const key = JSON.stringify(sharedState);
        if (!(key in this.flyweights)) {
            this.flyweights[key] = new Flyweight(sharedState);
        }
        return this.flyweights[key];
    }
}`,
        notes: [
          'Подходит: Для оптимизации работы с большим количеством объектов',
          'Не подходит: Когда объекты сильно различаются',
        ],
      },
      {
        title: 'Заместитель',
        en_title: 'Proxy',
        description: 'Предоставляет суррогат или заместитель для другого объекта.',
        code: `interface Subject {
    request(): void;
}

class RealSubject implements Subject {
    public request(): void {
        console.log('RealSubject: Handling request.');
    }
}

class Proxy implements Subject {
    private realSubject: RealSubject;

    constructor(realSubject: RealSubject) {
        this.realSubject = realSubject;
    }

    public request(): void {
        if (this.checkAccess()) {
            this.realSubject.request();
        }
    }

    private checkAccess(): boolean {
        console.log('Proxy: Checking access');
        return true;
    }
}`,
        notes: [
          'Подходит: Для ленивой инициализации, контроля доступа, кеширования',
          'Не подходит: Когда можно напрямую работать с объектом',
        ],
      },
    ],
  },
  {
    title: 'Поведенческие паттерны',
    en_title: 'Behavioral Patterns',
    subitems: [
      {
        title: 'Наблюдатель',
        en_title: 'Observer',
        description: 'Определяет зависимость "один-ко-многим" между объектами.',
        code: `interface Observer {
    update(data: any): void;
}

class Subject {
    private observers: Observer[] = [];

    addObserver(observer: Observer) {
        this.observers.push(observer);
    }

    notifyObservers(data: any) {
        this.observers.forEach(observer => observer.update(data));
    }
}

class ConcreteObserver implements Observer {
    update(data: any) {
        console.log(\`Received data: \${data}\`);
    }
}

const subject = new Subject();
subject.addObserver(new ConcreteObserver());
subject.notifyObservers("Hello!");`,
        notes: [
          'Подходит: Для событийных систем, MVC',
          'Не подходит: Когда порядок уведомлений критичен (может привести к цикличности)',
        ],
      },
      {
        title: 'Стратегия',
        en_title: 'Strategy',
        description:
          'Определяет семейство алгоритмов, инкапсулирует каждый из них и делает их взаимозаменяемыми.',
        code: `interface PaymentStrategy {
    pay(amount: number): void;
}

class CreditCardPayment implements PaymentStrategy {
    pay(amount: number) {
        console.log(\`Paid \${amount} via credit card\`);
    }
}

class PayPalPayment implements PaymentStrategy {
    pay(amount: number) {
        console.log(\`Paid \${amount} via PayPal\`);
    }
}

class ShoppingCart {
    constructor(private paymentStrategy: PaymentStrategy) {}

    checkout(amount: number) {
        this.paymentStrategy.pay(amount);
    }
}

const cart = new ShoppingCart(new PayPalPayment());
cart.checkout(100);`,
        notes: [
          'Подходит: Когда нужно выбирать алгоритм во время выполнения',
          'Не подходит: Для простых случаев с одним алгоритмом',
        ],
      },
      {
        title: 'Цепочка обязанностей',
        en_title: 'Chain of Responsibility',
        description: 'Передает запрос по цепочке обработчиков.',
        code: `interface Handler {
    setNext(handler: Handler): Handler;
    handle(request: string): string | null;
}

abstract class AbstractHandler implements Handler {
    private nextHandler: Handler | null = null;

    public setNext(handler: Handler): Handler {
        this.nextHandler = handler;
        return handler;
    }

    public handle(request: string): string | null {
        if (this.nextHandler) {
            return this.nextHandler.handle(request);
        }
        return null;
    }
}

class ConcreteHandler1 extends AbstractHandler {
    public handle(request: string): string | null {
        if (request === '1') {
            return \`Handler1: processed \${request}\`;
        }
        return super.handle(request);
    }
}`,
        notes: [
          'Подходит: Для обработки запросов разными способами',
          'Не подходит: Когда обработчик всегда один',
        ],
      },
      {
        title: 'Итератор',
        en_title: 'Iterator',
        description:
          'Предоставляет способ последовательного доступа к элементам составного объекта.',
        code: `interface Iterator<T> {
    next(): T;
    hasNext(): boolean;
}

class ConcreteIterator implements Iterator<string> {
    private collection: string[] = [];
    private position: number = 0;

    constructor(collection: string[]) {
        this.collection = collection;
    }

    public next(): string {
        return this.collection[this.position++];
    }

    public hasNext(): boolean {
        return this.position < this.collection.length;
    }
}`,
        notes: [
          'Подходит: Для обхода сложных структур данных',
          'Не подходит: Для простых массивов',
        ],
      },
      {
        title: 'Хранитель',
        en_title: 'Memento',
        description: 'Позволяет сохранять и восстанавливать состояние объекта.',
        code: `class Originator {
    private state: string;

    constructor(state: string) {
        this.state = state;
    }

    public save(): Memento {
        return new ConcreteMemento(this.state);
    }

    public restore(memento: Memento): void {
        this.state = memento.getState();
    }
}

interface Memento {
    getState(): string;
    getDate(): string;
}

class ConcreteMemento implements Memento {
    private state: string;
    private date: string;

    constructor(state: string) {
        this.state = state;
        this.date = new Date().toISOString();
    }

    public getState(): string {
        return this.state;
    }
}`,
        notes: [
          'Подходит: Для реализации отмены операций',
          'Не подходит: Когда объекты часто меняют состояние',
        ],
      },
      {
        title: 'Состояние',
        en_title: 'State',
        description: 'Позволяет объекту изменять свое поведение при изменении состояния.',
        code: `interface State {
    handle(context: Context): void;
}

class Context {
    private state: State;

    constructor(state: State) {
        this.state = state;
    }

    public setState(state: State): void {
        this.state = state;
    }

    public request(): void {
        this.state.handle(this);
    }
}

class ConcreteStateA implements State {
    public handle(context: Context): void {
        console.log('State A handling');
        context.setState(new ConcreteStateB());
    }
}`,
        notes: [
          'Подходит: Для объектов с изменяющимся поведением',
          'Не подходит: Когда состояния мало отличаются',
        ],
      },
      {
        title: 'Шаблонный метод',
        en_title: 'Template Method',
        description:
          'Определяет скелет алгоритма, перекладывая ответственность за некоторые шаги на подклассы.',
        code: `abstract class AbstractClass {
    public templateMethod(): void {
        this.baseOperation1();
        this.requiredOperations1();
        this.baseOperation2();
        this.hook1();
    }

    protected baseOperation1(): void {
        console.log('AbstractClass: baseOperation1');
    }

    protected abstract requiredOperations1(): void;

    protected baseOperation2(): void {
        console.log('AbstractClass: baseOperation2');
    }

    protected hook1(): void {}
}

class ConcreteClass1 extends AbstractClass {
    protected requiredOperations1(): void {
        console.log('ConcreteClass1: requiredOperation1');
    }
}`,
        notes: [
          'Подходит: Для алгоритмов с общими шагами',
          'Не подходит: Когда каждый алгоритм уникален',
        ],
      },
      {
        title: 'Команда',
        en_title: 'Command',
        description: 'Инкапсулирует запрос как объект.',
        code: `interface Command {
    execute(): void;
}

class SimpleCommand implements Command {
    private payload: string;

    constructor(payload: string) {
        this.payload = payload;
    }

    public execute(): void {
        console.log(\`SimpleCommand: \${this.payload}\`);
    }
}

class Invoker {
    private onStart: Command | null = null;

    public setOnStart(command: Command): void {
        this.onStart = command;
    }

    public doSomethingImportant(): void {
        if (this.onStart) {
            this.onStart.execute();
        }
    }
}`,
        notes: [
          'Подходит: Для реализации отмены операций, очередей команд',
          'Не подходит: Для простых операций',
        ],
      },
      {
        title: 'Посредник',
        en_title: 'Mediator',
        description: 'Определяет объект, инкапсулирующий способ взаимодействия объектов.',
        code: `interface Mediator {
    notify(sender: object, event: string): void;
}

class ConcreteMediator implements Mediator {
    private component1: Component1;
    private component2: Component2;

    constructor(c1: Component1, c2: Component2) {
        this.component1 = c1;
        this.component1.setMediator(this);
        this.component2 = c2;
        this.component2.setMediator(this);
    }

    public notify(sender: object, event: string): void {
        if (event === 'A') {
            this.component2.doC();
        }
    }
}

class BaseComponent {
    protected mediator: Mediator | null = null;

    public setMediator(mediator: Mediator): void {
        this.mediator = mediator;
    }
}`,
        notes: [
          'Подходит: Для уменьшения связанности компонентов',
          'Не подходит: Когда компоненты редко взаимодействуют',
        ],
      },
      {
        title: 'Посетитель',
        en_title: 'Visitor',
        description: 'Описывает операцию, выполняемую с каждым объектом из некоторой структуры.',
        code: `interface Component {
    accept(visitor: Visitor): void;
}

class ConcreteComponentA implements Component {
    public accept(visitor: Visitor): void {
        visitor.visitConcreteComponentA(this);
    }

    public exclusiveMethodOfConcreteComponentA(): string {
        return 'A';
    }
}

interface Visitor {
    visitConcreteComponentA(element: ConcreteComponentA): void;
}

class ConcreteVisitor1 implements Visitor {
    public visitConcreteComponentA(element: ConcreteComponentA): void {
        console.log(\`\${element.exclusiveMethodOfConcreteComponentA()} + Visitor1\`);
    }
}`,
        notes: [
          'Подходит: Для выполнения операций над сложными структурами объектов',
          'Не подходит: Когда структура объектов часто меняется',
        ],
      },
    ],
  },
]
