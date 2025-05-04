// this is just a fake class definition typed out from the docs so we can use core modules
const coreModules = `
class Class {
  name {}
  supertype {}
}
class Sound {
  construct load_ogg(file) {}
  play() {}
  play(volume, pitch, pan) {}
}
class Color {
  static BLACK {}
  static WHITE {}
  static RED {}
  static GREEN {}
  static BLUE {}
  r {}
  g {}
  b {}
  a {}
  toString {}
  clamp {}
  construct new(r, g, b, a) {}
  construct new(r, g, b) {}
  construct new(rgb) {}
}

class Draw {
    foreign static rectangle(x, y, width, height, r, g, b, a, fill)
    foreign static circle(x, y, radius, r, g, b, a, fill)
    foreign static line(x1, y1, x2, y2, r, g, b, a)
    foreign static put_pixel(x, y, r, g, b)
    foreign static clear(r, g, b, a)
    foreign static text(x, y, msg, r, g, b, a)
    static rectangle(pos, size, color, fill) {}
    static rectangle(x, y, width, height, color, fill) {}
    static circle(pos, radius, color, fill) {}
    static line(start, end, color) {}
    static put_pixel(pos, color) {}
    static get_pixel(x, y) {}
    static get_pixel(pos) {}
    static clear(r, g, b) {}
    static clear(color) {}
    static clear() {}
    static text(pos, msg, color) {}
    static text(x, y, msg, color) {}
}

class Engine {
    foreign static init(width, height, title)
    foreign static destroy()
    foreign static get_os()
    static OS_NIX {}
    static OS_MACOS {}
    static OS_WINDOWS {}
    static OS_UNKNOWN {}
    foreign static get_build_id()
    foreign static get_build_string()
}


class FileIO {
    construct open(path, mode) {}
    close() {}
    read_byte() {}
    write_byte(byte) {}
    read_char() {}
    read() {}
    write(data) {}
    read_line() {}
    toString {}
}
class Input {
    foreign static mouse_x()
    foreign static mouse_y()
    static mouse_pos() {}
    foreign static get_mouse_button()
    static button_mouse_left {}
    static button_mouse_right {}
    static button_mouse_middle {}
    foreign static get_keycode(key_name)
    foreign static is_key_pressed(keycode)
    foreign static is_key_held(keycode)
}

class Keycodes {
    static F1 {}
    static F2 {}
    static F3 {}
    static F4 {}
    static F5 {}
    static F6 {}
    static F7 {}
    static F8 {}
    static F9 {}
    static F10 {}
    static F11 {}
    static F12 {}
    static BACKSPACE {}
    static TAB {}
    static RETURN {}
    static SHIFT {}
    static CONTROL {}
    static ALT {}
    static PAUSE {}
    static CAPSLOCK {}
    static ESCAPE {}
    static SPACE {}
    static PAGEUP {}
    static PAGEDOWN {}
    static END {}
    static HOME {}
    static LEFT {}
    static UP {}
    static RIGHT {}
    static DOWN {}
    static INSERT {}
    static DELETE {}
    static NUMLOCK {}
    static SCROLLLOCK {}
    static LEFT_SHIFT {}
    static RIGHT_SHIFT {}
    static LEFT_CONTROL {}
    static RIGHT_CONTROL {}
    static LEFT_ALT {}
    static RIGHT_ALT {}
    static SEMICOLON {}
    static EQUAL {}
    static COMMA {}
    static MINUS {}
    static DOT {}
    static SLASH {}
    static BACKTICK {}
    static LEFT_SQUARE_BRACKET {}
    static BACKSLASH {}
    static RIGHT_SQUARE_BRACKET {}
    static TICK {}
}

class Math {
    static min(a, b) {}
    static max(a, b) {}
    static clamp(value, min, max) {}
    static map(value, old_min, old_max, new_min, new_max) {}
    static map_clamped(value, old_min, old_max, new_min, new_max) {}
    static lerp(value, target, factor) {}
    static abs(a) {}
    static floor(a) {}
    static ceil(a) {}
    static sqrt(a) {}
    static pow(a, b) {}
    static sin(a) {}
    static cos(a) {}
    static atan2(a, b) {}
    static fmod(a, b) {}
    static rad2deg(a) {}
    static deg2rad(a) {}
}

class Random {
    foreign static seed(seed)
    foreign static rand()
    foreign static irange(min, max)
    foreign static perlin(x, y, z, x_wrap, y_wrap, z_wrap, seed)
}

class Surface {
    foreign static new(width, height)
    foreign static new_from_png(path)
    foreign static set_target(surfaceid)
    foreign static reset_target()
    foreign static draw(surfaceid, x, y, alpha)
    static draw_centered(surfaceid, pos, alpha) {}
    foreign static draw_angle(surfaceid, x, y, angle)
    static draw_angle(surfaceid, pos, angle) {}
    foreign static get_width(surfaceid)
    foreign static get_height(surfaceid)
    foreign static destroy(surfaceid)
    foreign static resize(surfaceid, width, height)
}
class Vector {
    static ZERO {}
    static UP {}
    static DOWN {}
    static LEFT {}
    static RIGHT {}
    x { _x }
    y { _y }
    x=(value) {}
    y=(value) {}
    toString {}
    construct new(x, y) {}
    length_squared {}
    length {}
    normalized {}
    angle { (-_y).atan(_x) }
    distance_to(vec) {}
    dot(vec) {}
    distance_to_line(vec1, vec2) {}
    angle_to(vec) {}
    rotated(angle) {}
    clamped(min, max) {}
}

class Fiber {
  static abort(message) {}
  static current {}
  construct new(function) {}
  static suspend() {}
  static yield() {}
  static yield(value) {}

  call() {}
  call(value) {}
  error {}
  isDone {}
  try() {}
  transfer() {}
  transfer(value) {}
  transferError(error) {}
}

class Fn {
  construct new(function) {}

  arity {}
  call(args) {}
}

class List is Sequence {
  static filled(size, element) {}
  construct new() {}

  add(item) {}
  clear() {}
  count {}
  insert(index, item) {}
  removeAt(index) {}
}

class Map is Sequence {
  construct new() {}
  clear() {}
  containsKey(key) {}
  count {}
  keys {}
  remove(key) {}
  values {}
}

class Num {
  static fromString(value) {}
  static pi {}
  static largest {}
  static smallest {}

  abs {}
  acos {}
  asin {}
  atan {}
  atan(x) {}
  ceil {}
  cos {}
  floor {}
  isInfinity {}
  isInteger {}
  isNan {}
  log {}
  pow(power) {}
  round {}
  sin {}
  sqrt {}
  tan {}
}

class Object {
  static same(obj1, obj2) {}
}

class Sequence {
  all(predicate) {}
  any(predicate) {}
  contains(element) {}
  count {}
  count(predicate) {}
  each(function) {}
  isEmpty {}
  join(separator) {}
  join() {}
  map(transformation) {}
  reduce(function) {}
  reduce(seed, function) {}
  skip(count) {}
  take(count) {}
  toList {}
  where(predicate) {}
}

class String {
  static fromCodePoint(codePoint) {}
  bytes {}
  codePoints {}
  contains(other) {}
  count {}
  endsWith(suffix) {}
  indexOf(search) {}
  indexOf(search, start) {}
  replace(old, swap) {}
  split(separator) {}
  startsWith(prefix) {}
  trim() {}
  trim(chars) {}
  trimEnd() {}
  trimEnd(chars) {}
  trimStart() {}
  trimStart(chars) {}
}

class System {
  static clock {}
  static gc() {}
  static print() {}
  static print(object) {}
  static printAll(sequence) {}
  static write(object) {}
}
`;

export { coreModules };