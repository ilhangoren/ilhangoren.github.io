---
search: true
categories: 
  - How-to-blogging
layout: single
title: "How to add your own posts to this website"
description: "Steps for guests to publish their own posts"
modified: 2022-03-05
tags: [Blog, Open-source, How-to]
comments: true
share: true
---
(*Eng*) 

>Post yazmak için ***_\_posts_*** klasörüne girip .md uzantılı dosya oluşturuyoruz. Dosya ismini ***2018-2-08-Jekyll ile post yazma.md*** yapiyoruz.
İçine aşağıdaki metini yazınca şuan görmekte olduğunuza benzer bir post oluşuyor. Herşey otomatik.

```yaml
---
search: true
categories: 
  - Guest-posts
layout: single
title: "How to add your own posts to this website"
description: "Steps for guests to publish their own posts"
modified: 2022-03-05
tags: [Blog, Open-source, Guest-posts]
comments: true
share: true
---
(*Eng*)
Add your content to here. There is not extra effort for adding.

  For example, this is a paragraph.

When you want to add code snippets write
```yaml in the start of next line. After your code snippet by writing ``` you will have added your code snippet like this you are reading.

```

---
(*Tr*) 

>Post yazmak için ***_\_posts_*** klasörüne girip .md uzantılı dosya oluşturuyoruz. Dosya ismini ***2018-2-08-Jekyll ile post yazma.md*** yapiyoruz.
İçine aşağıdaki metini yazınca şuan görmekte olduğunuza benzer bir post oluşuyor. Herşey otomatik.

```yaml
---
search: true
categories: 
  - Guest-posts
layout: single
title: "How to add your own posts to this website"
description: "Steps for guests to publish their own posts"
modified: 2022-03-05
tags: [Blog, Open-source, Guest-posts]
comments: true
share: true
---
(*Tr*)
Metinleri buraya ekleyin.
Yeni satır ve paragraflar için ek uğraş yok.

	Mesela bu bir paragraf başlangıcıdır.

Kod eklemek isteseniz bir sonraki satır başına

```yaml yazın. Sonrasında kodlarınızı yazın ve
hepsinden sonra satır başına ``` yazınca gördüğünüze
benzer bir post yazmış olacaksınız. 

```
