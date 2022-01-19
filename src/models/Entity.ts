import { classToPlain, plainToClass } from 'class-transformer';

type ClassType<T> = {
  new (...args: any[]): T;
};

function parse<T>(classType: ClassType<T>, object: Record<string, any>) {
  return plainToClass(classType, object, {
    enableImplicitConversion: true,
    excludeExtraneousValues: false,
    strategy: 'exposeAll',
  });
}

export default abstract class Entity {
  public static parse<T extends Entity>(obj: Record<string, any>): T {
    return parse(this as unknown as ClassType<T>, obj);
  }

  public static parseInstance<T extends Entity>(obj: Record<string, any>): T {
    return parse(this as unknown as ClassType<T>, classToPlain(obj));
  }

  public static parseArray<T extends Entity>(arr: Record<string, any>[]): T[] {
    if (!Array.isArray(arr)) {
      throw new Error('The entity list is not array');
    }

    return arr.map((objEl) => this.parse<T>(objEl));
  }
}
