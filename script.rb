colors = Array.new
i = 1

2.times do
  File.readlines('color-names').each do |line|
    colors.push(line.chomp)
  end
end


begin
  color = "#{i}" + ': "' + colors[i] + '",'
  i += 1
  print color + "\n"
end while i < 256
