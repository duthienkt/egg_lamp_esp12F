#ifndef STRING_BUILDER
#define STRING_BUILDER

char *stbd_string;
int stbd_length;

char *stbd_init(int length)
{
  stbd_string = new char[length];
  stbd_length = 0;
  return stbd_string;
}

void stbd_clear()
{
  stbd_length = 0;
}

void stdbd_print(const char *s)
{
  int k = 0;
  while (s[k])
  {
    stbd_string[stbd_length++] = s[k++];
  }
  stbd_string[stbd_length] = 0;
}

void stdbd_print(int x)
{
  if (x == 0) {
    stbd_string[stbd_length++] = '0';
    stbd_string[stbd_length] = 0;
    return ;
  }
  if (x < 0) {
    stbd_string[stbd_length++] = '-';
    x = -x;
  }
  int h = 1;
  int d;
  while (h <= x)
  {
    h *= 10;
  }
  while (h >= 10)
  {
    d = (x % h) / (h / 10);
    stbd_string[stbd_length++] = (char)(d + 48);
    h /= 10;
  }
  stbd_string[stbd_length] = 0;
}

/* code */
#endif //STRING_BUILDER


