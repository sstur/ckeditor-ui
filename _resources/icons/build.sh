rm images/x*
rm images/icons_*

for file in images/*-rtl.png
do
  #echo cp -n $file ./${file:7:-8}.png
  cp -n $file ./${file//-rtl/}
done

rm -rf ~/projects/ckeditor-ui/skins/ozone/icons
mv images ~/projects/ckeditor-ui/skins/ozone/icons
