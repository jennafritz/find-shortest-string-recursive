def find_shortest_string_recursive(arr)
  # type your code in here
  return arr[0] if arr.length === 1

  if arr[0].length <= arr[1].length
    arr.delete_at(1)
    return find_shortest_string_recursive(arr)
  elsif arr[0].length >= arr[1].length
    arr.delete_at(0)
    return find_shortest_string_recursive(arr)
  end

end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 'a'"
  puts "=>", find_shortest_string_recursive(['aaa', 'a', 'bb', 'ccc'])

  puts "Expecting: 'this'"
  puts "=>", find_shortest_string_recursive(['really', 'hoping', 'this', 'works'])

  puts "Expecting: 'hi'"
  puts "=>", find_shortest_string_recursive(['cat', 'hi', 'dog', 'an'])

  puts "Expecting: 'my'"
  puts "=>", find_shortest_string_recursive(['my', 'fingers', 'are', 'crossed'])

  puts "Expecting: 'lily'"
  puts "=>", find_shortest_string_recursive(['flower', 'juniper', 'lily', 'dandelion'])

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
# And a written explanation of your solution
