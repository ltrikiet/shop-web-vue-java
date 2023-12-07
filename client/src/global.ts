declare type Mutable<T> = {
  -readonly [P in keyof T]: T[P];
};

declare type Modify<T, R> = Omit<T, keyof R> & R;
