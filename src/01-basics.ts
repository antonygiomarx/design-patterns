/**
 * POO Basics
 * La Programación orientada a objetos (POO) es un paradigma basado en el concepto de envolver bloques de información
 * y su comportamiento relacionado, en lotes especiales llamados objetos, que se construyen a partir de un grupo
 * de “planos” definidos por un programador, que se denominan clases.
 */

/**
 * Objetos, clases
 * Un objeto es una colección de propiedades y métodos, que se denominan atributos y métodos, respectivamente.
 */

/**
 * + = public
 * - = private
 */

/**
 * Clase Cat
 * Propiedades:
 * + name
 * + age
 * + gender
 * + weight
 * + color
 * ...
 *
 * Métodos:
 * + breathe()
 * + eat(food)
 * + run(destination)
 * + sleep(hours)
 * + meow()
 */

/**
 * Digamos que tienes un gato llamado Pepe. Pepe es un objeto,
 * una instancia de la clase Gato . Cada gato tiene varios atributos estándar:
 * nombre, sexo, edad, peso, color, comida favorita, etc. Estos son los campos de la clase.
 */

/**
 * Además, todos los gatos se comportan de forma similar:
 * respiran, comen, corren, duermen y maúllan. Estos son los métodos
 * de la clase. Colectivamente, podemos referirnos a los campos y los métodos como los miembros de su clase.
 */

/**
 * Menta, la gata de tu amigo, también es una instancia de la clase
 * Cat. Tiene el mismo grupo de atributos que Pepe. La diferencia está en los valores de estos atributos:
 * su sexo es hembra, tiene un color diferente y pesa menos.
 * Por lo tanto, una clase es como un plano que define la estructura de los objetos,
 * que son instancias concretas de esa clase.
 */

/**
 * Jerarquía de clases
 * Todo va muy bien mientras hablamos de una sola clase. Naturalmente, un programa real contiene más de una clase.
 * Algunas de esas clases pueden estar organizadas en jerarquías de clase.
 */

/**
 * Digamos que tu vecino tiene un perro llamado Fido. Resulta que perros y gatos tienen mucho en común: nombre, sexo,
 * edad y color, son atributos tanto de perros como de gatos.
 * Los perros pueden respirar, dormir y correr igual que los gatos, por
 * lo que podemos definir la clase base Animal que enumerará
 * los atributos y comportamientos comunes.
 */

/**
 * Clase Animal
 * Propiedades:
 * + name
 * + sex
 * + age
 * + weight
 * + color
 *
 * Métodos
 * + breathe()
 * + eat(food)
 * + run(destination)
 * + sleep(hours)
 */

/**
 * Clase Cat hereda atributos y métodos de clase Animal
 * Agrega los siguientes atributos y métodos:
 *
 * Atributos:
 * - isNasty: boolean
 *
 * Métodos:
 * + meow()
 */

/**
 * Clase Dog hereda atributos y métodos de clase Animal
 * Agrega los siguientes atributos y métodos:
 *
 * Atributos:
 * - bestFriend: Human
 *
 * Métodos:
 * + bark()
 */

/**
 * Una clase padre, como la que acabamos de definir, se denomina superclase.
 * Sus hijas son las subclases. Las subclases heredan el estado y el comportamiento de su padre y se limitan
 * a definir atributos o comportamientos que son diferentes.
 * Por lo tanto, la clase Cat contendrá el método meow() y, la clase Dog, el método bark().
 */

/**
 * Ejemplo de clase abstracta Animal
 */

abstract class Animal {
  public name: string;

  public sex: string;

  public age: number;

  public weight: number;

  public color: string;

  public abstract breathe(): void;

  public abstract eat(food: string): void;

  public abstract run(destination: string): void;

  public abstract sleep(hours: number): void;

  constructor(
    name: string,
    sex: string,
    age: number,
    weight: number,
    color: string
  ) {
    this.name = name;
    this.sex = sex;
    this.age = age;
    this.weight = weight;
    this.color = color;
  }
}

/**
 * Ejemplo d clase Cat heredando de clase Animal
 */
class Cat extends Animal {
  private isNasty: boolean;

  constructor(
    name: string,
    sex: string,
    age: number,
    weight: number,
    color: string,
    isNasty: boolean
  ) {
    super(name, sex, age, weight, color);
    this.isNasty = isNasty;
  }

  public breathe(): void {
    console.info(`${this.name} is breathing`);
  }

  public eat(food: string): void {
    console.info(`${this.name} is eating ${food}`);
  }

  public run(destination: string): void {
    console.info(`${this.name} is running to ${destination}`);
  }

  public sleep(hours: number): void {
    console.info(`${this.name} is sleeping for ${hours} hours`);
  }

  public meow(): void {
    console.info(`${this.name} is meowing`);
  }
}

const cat = new Cat("Pepe", "Male", 2, 3, "Black", false);

cat.breathe();
cat.eat("Langosta");
cat.run("León");
cat.sleep(5);
cat.meow();

/**
 * Output:
 * Pepe is breathing
 * Pepe is eating Langosta
 * Pepe is running to León
 * Pepe is sleeping for 5 hours
 * Pepe is meowing
 */

class Dog extends Animal {
  // private bestFriend: Human; but Human object is not defined yet
  private bestFriend: string;

  constructor(
    name: string,
    sex: string,
    age: number,
    weigth: number,
    color: string,
    bestFriend: string
  ) {
    super(name, sex, age, weigth, color);
    this.bestFriend = bestFriend;
  }

  public breathe(): void {
    console.info(`${this.name} is breathing!`);
  }

  public eat(food: string): void {
    console.info(`${this.name} is eating ${food}`);
  }

  public run(destination: string): void {
    console.info(`${this.name} is running to ${destination}`);
  }

  public sleep(hours: number): void {
    console.info(`${this.name} is sleeping for ${hours} hours`);
  }

  public bark(): void {
    console.info(`${this.name} is barking`);
  }
}

const dog = new Dog("Koda", "Male", 3, 14, "White", "Francella");

dog.breathe();
dog.bark();
dog.eat("Pollo");
dog.run("Patio");
dog.sleep(5);

/**
 * Output:
 * Koda is breathing!
 * Koda is barking
 * Koda is eating Pollo
 * Koda is running to Patio
 * Koda is sleeping for 5 hours
 */

/** ************************************************************************************************************** */

/**
 * Los pilares de la POO.
 */

/**
 * La programación orientada a objetos se basa en cuatro pilares, conceptos que la diferencian de otros paradigmas de
 * programación.
 *
 * 1. Abstracción
 * 2. Encapsulamiento
 * 3. Herencia
 * 4. Polimorfismo
 */

/**
 * Abstracción
 *
 * La mayoría de las veces, cuando creas un programa con POO,
 * das forma a los objetos del programa con base a objetos del
 * mundo real. Sin embargo, los objetos del programa no representan
 * a los originales con una precisión del 100 % (y rara vez es necesario que lo hagan).
 *
 * En su lugar, tus objetos tan solo copian atributos y comportamientos de objetos reales en un
 * contexto específico, ignorando el resto.
 *
 * Por ejemplo, una clase Airplane probablemente podría existir
 * en un simulador de vuelo y en una aplicación de reserva de
 * vuelos.
 *
 * Pero, en el primer caso, contendría información relacionada con el propio vuelo,
 * mientras que en la segunda clase sólo habría que preocuparse del mapa de asientos y de los
 * asientos que estén disponibles.
 */

/**
 * Clase Airplane (Caso de uso Simulador de vuelo)
 * Propiedades:
 * - speed
 * - altitude
 * - rollAngle
 * - pitchAngle
 * - yawAngle
 *
 * Métodos:
 * + fly()
 */

/**
 * Clase Airplane (Caso de uso Reservar vuelo)
 * Propiedades:
 * - seats
 *
 * Métodos:
 * + reserveSeat(n)
 */

/**
 * La Abstracción es el modelo de un objeto o fenómeno del
 * mundo real, limitado a un contexto específico, que representa
 * todos los datos relevantes a este contexto con gran precisión,
 * omitiendo el resto.
 */

/**
 * Encapsulamiento
 *
 * Para arrancar el motor de un auto, tan solo debes girar una llave o pulsar un botón.
 * No necesitas conectar cables bajo el capó, rotar el cigüeñal y los cilindros, e iniciar el ciclo de potencia del motor.
 *
 * Estos detalles se esconden bajo el capó del auto.
 * Sólo tienes una interfaz simple: un interruptor de encendido, un volante y unos pedales.
 * Esto ilustra el modo en que cada objeto cuenta con una interfaz: una parte pública de un objeto,
 * abierta a interacciones con otros objetos.
 *
 * La encapsulación es la capacidad que tiene un objeto de esconder partes de su estado y comportamiento de otros objetos,
 * exponiendo únicamente una interfaz limitada al resto del programa.
 *
 * Encapsular algo significa hacerlo privado y, por ello, accesible únicamente desde dentro de los métodos de su propia clase.
 * Existe un modelo un poco menos restrictivo llamado protegido que hace que un miembro de una clase también esté disponible
 * para las subclases.
 *
 * Las interfaces, las clases y métodos abstractos de la mayoría de los lenguajes de programación se basan en conceptos
 * de abstracción y encapsulación.
 *
 * En los lenguajes modernos de programación orientada a objetos,
 * el mecanismo de la interfaz (declarado normalmente con la palabra clave interface o protocol ) te permite definir contratos
 * de interacción entre objetos.
 *
 * Ésta es una de las razones por las que las interfaces sólo se interesan por los comportamientos de los objetos,
 * y también el motivo por el que no puedes declarar un campo en una interfaz.
 */

/**
 * Imagina que tienes una interfaz FlyingTransport con un método fly(origin, destination, passengers).
 *
 * Clase Airport
 *
 * Métodos:
 * + accept(vehicle: FlyingTransport)
 *
 * Interfaz FlyingTransport
 *
 * Métodos:
 * + fly(origin, destination, passengers)
 *
 * Clase Helicopter
 *
 * Métodos:
 * + fly(origin, destination, passengers)
 *
 * Clase Airplane
 *
 * Métodos:
 * + fly(origin, destination, passengers)
 *
 * Clase DomesticatedGryphon
 *
 * Métodos:
 * + fly(origin, destination, passengers)
 */

interface FlyingTransport {}

class Airport {
  public accept(vehicle: FlyingTransport): void {}
}

class Helicopter implements FlyingTransport {}
